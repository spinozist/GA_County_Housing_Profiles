# Georgia City Housing Profile Tool

## Created by 
Erik Woodworth / Senior Planner / Research & Analytics Group @ the Atlanta Regional Commission

## Purpose
This tool was built to assist cities in Georgia with findng housing data to be included in grants, comp plans, reports, etc.

## Code description
This tool uses the US Census API to retrieve the housing profile table (DP04) by city ID (mapped to city names by index position in two arrays).  The tableWrite funciton parses the response from this API into seperate tables with section headers and an exportTableToCSV function within a button click listener.

The writeProfile function runs the tableWrite functions and adds a downloadAll button which runs an exportAlltoCSV function that loops over each table (minus the header row).
