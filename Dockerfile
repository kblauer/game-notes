# Base image - https://hub.docker.com/_/eclipse-temurin/
FROM eclipse-temurin:17-jdk

# Make spring user and group
RUN addgroup --system spring && adduser --system spring --ingroup spring

# make log directory
RUN mkdir ./logs
RUN touch ./logs/spring-boot-logger.log
RUN chown spring:spring ./logs
RUN chown spring:spring ./logs/spring-boot-logger.log

# change user to spring
USER spring:spring

# Expose 8080 for spring
EXPOSE 8080

# locate and rename jar
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# run app via entrypoint
ENTRYPOINT ["java", "-jar", "/app.jar"]