# Patna Metro Backend Technical Design Document

## Introduction

### Project Overview

The **Patna Metro** backend is designed to manage a subway metro system, allowing users to traverse multiple stations across different metro lines. The system calculates fares, facilitates ticket booking, and enables payments.

### Goals and Objectives

- Develop a scalable backend using **Node.js** and **TypeScript**.
- Store and manage metro stations and routes in a **PostgreSQL** database.
- Implement fare calculation based on distance and day of the week.
- Enable guest users to book and pay for metro tickets.

## System Architecture

### High-Level Architecture

The architecture consists of the following key components:

- **Express.js API** for handling requests.
- **PostgreSQL** as the database.
- **Fare Calculation Service** to compute ticket prices.
- **Payment Processing Module** for handling transactions.
- **Guest Mode** for booking tickets without authentication.
- **Station and Line Management** for route calculations.

## Component Design

### Station and Metro Lines

- A station belongs to multiple metro lines (e.g., Red Line, Blue Line).
- Station names are stored in two languages.
- Lines intersect at transfer stations.

### Fare Calculation

| Distance (km) | Mon-Sat Fare (Rs) | Sun/National Holiday Fare (Rs) |
| ------------- | ----------------- | ------------------------------ |
| 2-5 km        | 20                | 10                             |
| 5-12 km       | 30                | 20                             |
| 12-21 km      | 40                | 30                             |

### Ticket Booking and Payment

- Users can book **multiple tickets** for a single route.
- Payments are processed via a secure gateway.

## Database Design

### Schema (PostgreSQL)

```sql
CRoXT[] NOT NULL,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6)
);

CREATE TABLE metro_lines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    color VARCHAR(50) NOT NULL
);

CREATE TABLE station_connections (
    id SERIAL PRIMARY KEY,
    station_id_1 INT REFERENCES stations(id),
    station_id_2 INT REFERENCES stations(id),
    distance_km DECIMAL(5,2) NOT NULL
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    guest_id UUID NOT NULL,
    source_station INT REFERENCES stations(id),
    destination_station INT REFERENCES stations(id),
    fare INT NOT NULL,
    travel_date TIMESTAMP NOT NULL
);
```

## Security Considerations

- **Data Encryption**: Encrypt sensitive data in transit and at rest.
- **API Security**: Secure API with rate-limiting and input validation.
- **Payment Security**: Ensure PCI-DSS compliance for transactions.

## Performance Metrics

- **Response Time**: Fare calculation under 100ms.
- **Database Optimization**: Indexed queries for fast lookup.
- **Scalability**: Auto-scaling with AWS EC2.

## Deployment Plan

- **EC2 Configuration**: Deploy backend on AWS EC2.
- **CI/CD Pipeline**: Automate builds and deployments.
- **Monitoring & Logging**: Use CloudWatch for logs.

## Conclusion

This document outlines the architecture, design, and implementation strategy for **Patna Metro**, ensuring scalability, security, and efficiency in fare calculation and ticket booking.

