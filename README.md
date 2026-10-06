# Benchmarking-Excel-Dashboard-for-Paint-Coating-Products-Dunn-Edwards-
Paint product benchmarking dashboard designed to support marketing and sales teams in recommending the optimal coating for customer applications. Uses standardized performance tests, durability, weathering resistance, and pricing data to deliver data-driven insights and demonstrate product performance, value, and suitability.

1) Read the Benchmark Dashboard Project Introduction Brief for a quick summary of the paint market and the importance of paint companies to assess the performance of their products through laboratory tests.
2) Read the Dashboard Summary Brief as an additional summary of the following ReadME file

Coating Benchmark & Performance Dashboard
Overview

Commercial and research laboratories rely on standardized testing to ensure that paint and coating products can be compared objectively. However, differences in testing procedures, environmental conditions, data collection, and reporting can make it difficult to maintain consistent and trustworthy performance comparisons.

This project is a dynamic benchmarking and analysis system for commercial paint and coating products. It combines structured laboratory test data, customizable test weighting, weathering results, product pricing, and visual degradation data into a centralized analytical workflow.

The system allows users to select products, define performance priorities, compare standardized test results, analyze long-term weathering performance, and ultimately determine which product provides the best value for a specific application.

Project Objectives

Standardize benchmarking procedures and data capture.

Build a scalable data model connecting products, tests, ratings, weights, weathering results, and images.

Enable dynamic product comparisons using user-defined test weightings.

Provide visual archives of test images and weathering progression.

Automate data preparation and image retrieval.

Reduce reporting time from days to minutes through structured data and automated calculations.

Create an archival database of coating performance for future R&D and marketing analysis.

Core Deliverables
1. Benchmark Test Grid

An Excel-based template used to generate standardized test grids for benchmarking projects.

The template helps ensure that:

The same tests are applied consistently across products.

Test information is captured in a standardized format.

Product and test identifiers remain consistent.

Results can be loaded directly into the analytical data model.

2. Weathering Test Grid

A standardized template for capturing long-term weathering performance and degradation observations.

Weathering records can later be connected to images to provide both numeric and visual analysis of coating degradation over time.

3. Data Model

A relational data model separates product information, test definitions, scoring criteria, weighting logic, and laboratory results.

Dimension Tables
Table	Purpose
dBenchmarkProducts	Unique product keys and product attributes
dTestIDDirectory	Catalog of laboratory tests
dTestRatings	Performance thresholds such as Poor, Average, Good, and Exceptional
dTestMappingTable	Test hierarchy and category structure
dTestWeightTable	User-defined test weighting
dWeatheringTestIDDirectory	Definitions for weathering tests
ImageSharelinks	Links product/test IDs to Google Drive images
Fact Tables
Table	Purpose
fBenchmarkData	Laboratory benchmark test results
fWeatheringData	Weathering test results

This structure allows new products and tests to be added without redesigning the entire dashboard.

Dashboard Workflow

The dashboard is organized into several stages that guide the user from data validation through final product recommendations.

1. Records Check

Before benchmarking, the system verifies that comparable data exists across the selected products.

Users can select up to four products and multiple test categories. The dashboard cross-references the available records to identify which tests have been performed across all selected products.

2. Product Selection

Users filter and select the final benchmark products.

A reference product can also be selected. Performance results can then be compared against this reference throughout the analysis.

3. Test Selection & Weighting

Users select the tests and categories that matter most for the application.

Tests can be assigned different weights to reflect their importance to the final benchmark score.

The dashboard also visualizes the distribution of test significance so users can understand how their weighting decisions influence the analysis.

4. Benchmarking Results

The dashboard calculates performance scores and comparisons across the selected products.

Users can:

Compare products against a reference product.

Identify advantages and disadvantages.

Drill into individual tests.

Analyze granular test results alongside aggregated scores.

View performance at different levels of the test hierarchy.

Adjust test significance without rebuilding the analysis.

5. Weathering Records

The system cross-references available weathering records based on the selected products and weathering tests.

This allows users to quickly determine whether sufficient weathering data exists for a meaningful comparison.

6. Weathering Benchmark & Image Analysis

Weathering performance can be analyzed both numerically and visually.

Test images are linked to product and test identifiers using Google Drive and Google Apps Script, allowing users to examine coating degradation over time alongside the corresponding performance data.

7. Final Outputs

The final analysis can be used to produce:

Product performance comparisons

Performance-to-price ratios

Product advantages and disadvantages

Weathering degradation timelines

Marketing product search and selection

R&D archival references

Application-specific product recommendations

Example Use Case
Commercial Casino Project — Las Vegas

Imagine a large commercial contracting company is preparing to paint a newly constructed casino in Las Vegas.

The company is evaluating 3–5 major commercial paint brands and needs to determine which coating system will provide the best long-term performance in a harsh desert environment.

Using the dashboard, the team can:

Select the products being considered.

Verify that comparable laboratory tests exist for each product.

Select the tests most relevant to exterior durability.

Assign higher weights to tests that are most important for the application.

Compare performance against a reference product.

Review historical weathering results.

Examine degradation images side-by-side.

Calculate performance relative to product cost.

The result is a data-driven recommendation based on the specific performance characteristics that matter to the customer, rather than relying solely on product specifications or marketing claims.

For example, if long-term exterior durability is the primary objective, the dashboard could identify the product with the strongest combination of weathering resistance, laboratory performance, and price-to-performance value.

Technical Architecture

The project combines several technologies to create an integrated data and reporting workflow.

                    ┌──────────────────────┐
                    │   Benchmark Projects │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Excel Test Templates │
                    │  + VBA Automation    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Lab Test Data    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Power Query      │
                    │ Data Transformation  │
                    └──────────┬───────────┘
                               │
                               ▼
             ┌─────────────────────────────────┐
             │         Relational Model        │
             │                                 │
             │ Products │ Tests │ Ratings      │
             │ Weights  │ Weathering │ Images  │
             └────────────────┬────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
          ┌─────────────────┐   ┌──────────────────┐
          │ Google Drive +  │   │   Weathering     │
          │ Google Apps     │   │     Records      │
          │ Script          │   │                  │
          └────────┬────────┘   └────────┬─────────┘
                   │                     │
                   └──────────┬──────────┘
                              ▼
                    ┌──────────────────────┐
                    │   Benchmark Dashboard│
                    │                      │
                    │ Selection → Weighting│
                    │ → Scoring → Weather  │
                    │ → Image Analysis     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │ Final Recommendations│
                    │ & Value Analysis     │
                    └──────────────────────┘

Technical Concepts Demonstrated
Data Modeling

Relational data modeling

Fact and dimension tables

Table relationships

Unique product and test identifiers

Hierarchical test structures

Mapping tables

Scalable data architecture

Power Query

Data transformation

Custom filtering

Data validation

Structured data ingestion

Automated preparation of laboratory records

DAX

Dynamic averaging

Performance calculations

Weighted scoring

Hierarchical aggregation

Reference-product comparisons

Aggregation across selected tests

Dynamic performance metrics

Excel & VBA

Custom benchmark forms

Automated test-grid generation

Standardized data-entry workflows

Structured laboratory data capture

Google Apps Script

Google Apps Script is used to connect the analytical workflow with images stored in Google Drive.

The script converts stored image references into usable URLs that can be associated with product and test identifiers and retrieved within the reporting workflow.

This allows laboratory results and visual evidence to be analyzed together.

Key Benefits
Benefit	Description
Standardization	Creates consistent and reproducible benchmarking procedures
Transparency	Improves traceability of tests, operators, equipment, and procedures
Efficiency	Automates data retrieval and calculations to reduce reporting time
Scalability	Allows new products, tests, and weighting logic to be added
Visual Analysis	Connects numerical results with actual weathering images
Strategic Value	Supports R&D, marketing, sales, and customer decisions
Archival Value	Maintains historical coating performance for future reference
Files

This repository contains examples of the core components used to build the system:

Benchmark Test Grid Template

Weathering Test Grid Template

Benchmark Dashboard

Google Apps Script

Supporting data-model documentation

Note: Sample or anonymized data may be used in this repository to demonstrate the functionality of the system while protecting proprietary laboratory and product information.

Project Outcome

The resulting system transforms a traditionally manual benchmarking process into a structured, repeatable analytical workflow.

Instead of manually compiling test results and producing reports individually, users can move from product selection → test validation → weighting → scoring → weathering analysis → visual comparison → final recommendation within a single analytical framework.

The combination of structured data modeling, automated transformations, dynamic calculations, and image integration creates a system capable of supporting both day-to-day laboratory reporting and long-term product intelligence.

Skills Demonstrated

Data & Analytics

Data modeling

Relational database design

Data transformation

Statistical aggregation

Dynamic scoring

Performance analysis

Microsoft Excel

Advanced Excel

Power Query

DAX

VBA

Dynamic forms

Data validation

Automation

Google Apps Script

Google Drive integration

Automated image URL generation

Workflow automation

Business Intelligence

Interactive dashboard development

KPI design

Product benchmarking

Performance-to-price analysis

Decision-support analytics
