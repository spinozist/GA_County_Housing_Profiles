
window.onload = function () {
    
    var countyGA = [
        "Appling County",
        "Atkinson County",
        "Bacon County",
        "Baker County",
        "Baldwin County",
        "Banks County",
        "Barrow County",
        "Bartow County",
        "Ben Hill County",
        "Berrien County",
        "Bibb County",
        "Bleckley County",
        "Brantley County",
        "Brooks County",
        "Bryan County",
        "Bulloch County",
        "Burke County",
        "Butts County",
        "Calhoun County",
        "Camden County",
        "Candler County",
        "Carroll County",
        "Catoosa County",
        "Charlton County",
        "Chatham County",
        "Chattahoochee County",
        "Chattooga County",
        "Cherokee County",
        "Clarke County",
        "Clay County",
        "Clayton County",
        "Clinch County",
        "Cobb County",
        "Coffee County",
        "Colquitt County",
        "Columbia County",
        "Cook County",
        "Coweta County",
        "Crawford County",
        "Crisp County",
        "Dade County",
        "Dawson County",
        "Decatur County",
        "DeKalb County",
        "Dodge County",
        "Dooly County",
        "Dougherty County",
        "Douglas County",
        "Early County",
        "Echols County",
        "Effingham County",
        "Elbert County",
        "Emanuel County",
        "Evans County",
        "Fannin County",
        "Fayette County",
        "Floyd County",
        "Forsyth County",
        "Franklin County",
        "Fulton County",
        "Gilmer County",
        "Glascock County",
        "Glynn County",
        "Gordon County",
        "Grady County",
        "Greene County",
        "Gwinnett County",
        "Habersham County",
        "Hall County",
        "Hancock County",
        "Haralson County",
        "Harris County",
        "Hart County",
        "Heard County",
        "Henry County",
        "Houston County",
        "Irwin County",
        "Jackson County",
        "Jasper County",
        "Jeff Davis County",
        "Jefferson County",
        "Jenkins County",
        "Johnson County",
        "Jones County",
        "Lamar County",
        "Lanier County",
        "Laurens County",
        "Lee County",
        "Liberty County",
        "Lincoln County",
        "Long County",
        "Lowndes County",
        "Lumpkin County",
        "McDuffie County",
        "McIntosh County",
        "Macon County",
        "Madison County",
        "Marion County",
        "Meriwether County",
        "Miller County",
        "Mitchell County",
        "Monroe County",
        "Montgomery County",
        "Morgan County",
        "Murray County",
        "Muscogee County",
        "Newton County",
        "Oconee County",
        "Oglethorpe County",
        "Paulding County",
        "Peach County",
        "Pickens County",
        "Pierce County",
        "Pike County",
        "Polk County",
        "Pulaski County",
        "Putnam County",
        "Quitman County",
        "Rabun County",
        "Randolph County",
        "Richmond County",
        "Rockdale County",
        "Schley County",
        "Screven County",
        "Seminole County",
        "Spalding County",
        "Stephens County",
        "Stewart County",
        "Sumter County",
        "Talbot County",
        "Taliaferro County",
        "Tattnall County",
        "Taylor County",
        "Telfair County",
        "Terrell County",
        "Thomas County",
        "Tift County",
        "Toombs County",
        "Towns County",
        "Treutlen County",
        "Troup County",
        "Turner County",
        "Twiggs County",
        "Union County",
        "Upson County",
        "Walker County",
        "Walton County",
        "Ware County",
        "Warren County",
        "Washington County",
        "Wayne County",
        "Webster County",
        "Wheeler County",
        "White County",
        "Whitfield County",
        "Wilcox County",
        "Wilkes County",
        "Wilkinson County",
        "Worth County"];

    var countyIDs = [
        "001",
        "003",
        "005",
        "007",
        "009",
        "011",
        "013",
        "015",
        "017",
        "019",
        "021",
        "023",
        "025",
        "027",
        "029",
        "031",
        "033",
        "035",
        "037",
        "039",
        "043",
        "045",
        "047",
        "049",
        "051",
        "053",
        "055",
        "057",
        "059",
        "061",
        "063",
        "065",
        "067",
        "069",
        "071",
        "073",
        "075",
        "077",
        "079",
        "081",
        "083",
        "085",
        "087",
        "089",
        "091",
        "093",
        "095",
        "097",
        "099",
        "101",
        "103",
        "105",
        "107",
        "109",
        "111",
        "113",
        "115",
        "117",
        "119",
        "121",
        "123",
        "125",
        "127",
        "129",
        "131",
        "133",
        "135",
        "137",
        "139",
        "141",
        "143",
        "145",
        "147",
        "149",
        "151",
        "153",
        "155",
        "157",
        "159",
        "161",
        "163",
        "165",
        "167",
        "169",
        "171",
        "173",
        "175",
        "177",
        "179",
        "181",
        "183",
        "185",
        "187",
        "189",
        "191",
        "193",
        "195",
        "197",
        "199",
        "201",
        "205",
        "207",
        "209",
        "211",
        "213",
        "215",
        "217",
        "219",
        "221",
        "223",
        "225",
        "227",
        "229",
        "231",
        "233",
        "235",
        "237",
        "239",
        "241",
        "243",
        "245",
        "247",
        "249",
        "251",
        "253",
        "255",
        "257",
        "259",
        "261",
        "263",
        "265",
        "267",
        "269",
        "271",
        "273",
        "275",
        "277",
        "279",
        "281",
        "283",
        "285",
        "287",
        "289",
        "291",
        "293",
        "295",
        "297",
        "299",
        "301",
        "303",
        "305",
        "307",
        "309",
        "311",
        "313",
        "315",
        "317",
        "319",
        "321"];

    var rowLabels = [
        "Total housing units",
        "Occupied housing units",
        "Vacant housing units",
        "Homeowner vacancy rate",
        "Rental vacancy rate",
        "Total housing units",
        "1-unit, detached",
        "1-unit, attached",
        "2 units",
        "3 to 4 units",
        "5 to 9 units",
        "10 to 19 units",
        "20 or more units",
        "Mobile home",
        "Boat, RV, van, etc.",
        "Total housing units",
        "Built 2014 or later",
        "Built 2010 to 2013",
        "Built 2000 to 2009",
        "Built 1990 to 1999",
        "Built 1980 to 1989",
        "Built 1970 to 1979",
        "Built 1960 to 1969",
        "Built 1950 to 1959",
        "Built 1940 to 1949",
        "Built 1939 or earlier",
        "Total housing units",
        "1 room",
        "2 rooms",
        "3 rooms",
        "4 rooms",
        "5 rooms",
        "6 rooms",
        "7 rooms",
        "8 rooms",
        "9 rooms",
        "Median rooms",
        "Total housing units",
        "No bedroom",
        "1 bedroom",
        "2 bedrooms",
        "3 bedrooms",
        "4 bedrooms",
        "5 or more bedrooms",
        "Occupied housing units",
        "Owner-occupied",
        "Renter-Occupied",
        "Average houshold size of owner-occupied unit",
        "Average houshold size of renter-occupied unit",
        "Occupied housing units",
        "Moved in 2015 or later",
        "Moved in 2010 to 2014",
        "Moved in 2000 to 2009",
        "Moved in 1990 to 1999",
        "Moved in 1980 to 1989",
        "Moved in 1979 or earlier",
        "Occupied housing units",
        "No vehicle available",
        "1 vehicle available",
        "2 vehicles available",
        "3 or more vehicles available",
        "Occupied housing units",
        "Utility gas",
        "Bottled, tank, or LP gas",
        "Electricounty",
        "Fuel oil, kerosene, etc.",
        "Coal or coke",
        "Wood",
        "Solar energy",
        "Other fuel	",
        "No fuel used",
        "Occupied housing units",
        "Lacking complete plumbing facilities",
        "Lacking complete kitchen facilities",
        "No telephone service available",
        "Occupied housing units",
        "1.00 or less",
        "1.01 to 1.50",
        "1.51 or more",
        "Owner-occupied housing units",
        "Less than $50,000",
        "$50,000 to $99,999",
        "$100,000 to $149,999",
        "$150,000 to $199,999",
        "$200,000 to $299,999",
        "$300,000 to $499,999",
        "$500,000 to $999,999",
        "$1,000,000 or more",
        "Median (dollars)",
        "Owner-occupied housing units",
        "Housing units with a mortgage",
        "Housing units without a mortgage",
        "Housing units WITH a mortgage",
        "Less than $500",
        "$500 to $999",
        "$1,000 to $1,499",
        "$1,500 to $1,999",
        "$2,000 to $2,499",
        "$2,500 to $2,999",
        "$3,000 or more",
        "Median (dollars)",
        "Housing units WITHOUT a mortgage",
        "Less than $250",
        "$250 to $399",
        "$400 to $599",
        "$600 to $799",
        "$800 to $999",
        "$1,000 or more",
        "Median (dollars)",
        "Housing units WITH a mortgage (computed)",
        "Less than 20.0 percent",
        "20.0 to 24.9 percent",
        "25.0 to 29.9 percent",
        "30.0 to 34.9 percent",
        "35.0 percent or more",
        "Not computed",
        "Housing units WITHOUT a mortgage (computed)",
        "Less than 10.0 percent",
        "10.0 to 14.9 percent",
        "15.0 to 19.9 percent",
        "20.0 to 24.9 percent",
        "25.0 to 29.9 percent",
        "30.0 to 34.9 percent",
        "35.0 percent or more",
        "Not computed",
        "Occupied units paying rent",
        "Less than $500",
        "$500 to $999",
        "$1,000 to $1,499",
        "$1,500 to $1,999",
        "$2,000 to $2,499",
        "$2,500 to $2,999",
        "$3,000 or more",
        "Median (dollars)",
        "No rent paid",
        "Ocuppied units paying rent (computed)",
        "Less than 15.0 percent",
        "15.0 to 19.9 percent",
        "20.0 to 24.9 percent",
        "25.0 to 29.9 percent",
        "30.0 to 34.9 percent",
        "35.0 percent or more",
        "Not computed"
    ]

    $(`#input`).autocomplete({
        source: countyGA
    });

    var inputHistory = [];

    $(`#submit-button`).on(`click`, function () {

        var input = $(`#input`).val();

        var countyID = countyIDs[countyGA.indexOf(input)]

        console.log(`button clicked`);

        if (input && input !== inputHistory[inputHistory.length - 1]) {

            $(`#table-box`).html(`
            <div class="loader"></div>
            `);

            $(`#table-box`).attr(`class`, `visible`);

            function writeProfile(response) {

                inputHistory.push(input);

                console.log(response)

                setTimeout(function () {

                    $(`#table-box`).empty()
                        .append(`
                        <h1 id="countyTitle">${input}</h1>
                        <button id="downloadAll">Download ALL Tables</button>
                        `);

                    function tableWrite(init, end, tableName, tableID, response) {

                        $(`#table-box`).append(`  
                        <br>
                        <h2 class="table-name" id="table-name${tableID}">${tableName}</h2>
                        <table id="table${tableID}">
                        <tr>
                            <th id="indicator">Indicator</th>
                            <th>Estimate</th>
                            <th>MOE</th>
                            <th>Percent</th>
                            <th>%MOE</th>
                        </tr>
                        </table>
                        <button id="table${tableID}toCSV" class="csv-button">Download Table</button>
                        <br>
                        `);

                        for (i = init; i < end; i++) {

                            var estimate = response[1][i];
                            var estimateMOE = response[1][i + 1];
                            var percent = response[1][i + 2];
                            var percentMOE = response[1][i + 3];

                            if (estimate > 999) {
                                estimate = numeral(estimate).format('0,0')
                            }
                            else if (estimate == -666666666.0){
                                estimate = `*****`;
                            };

                            if (estimateMOE == -222222222.0) {
                                estimateMOE = `*****`;
                            } else {
                                estimateMOE = `+/-${estimateMOE}`;
                            }

                            if (response[1][i + 1] > 999) {
                                estimateMOE = `+/-${numeral(response[1][i + 1]).format('0,0')}`
                            };

                            if (percent == -888888888 || estimate === numeral(percent).format(`0,0`) || estimate === percent) {
                                percent = `*****`;
                            } else {
                                percent = `${percent}%`;
                            };


                            if (percentMOE == -888888888) {
                                percentMOE = `*****`;
                            } else {
                                percentMOE = `+/-${percentMOE}`;
                            }

                            if (i % 4 == 0) {
                                var labelIndex = i / 4;
                                var tableRow = $(`<tr>`);
                                if ((i - init) % 8 == 0) {
                                    tableRow.attr("class", "band");
                                }

                                tableRow.html(`
                            <td class="rowLabel">${rowLabels[labelIndex]}</td>
                            <td>${estimate}</td>
                            <td>${estimateMOE}</td>
                            <td>${percent}</td>
                            <td>${percentMOE}</td>
        
                            `);
                                $(`#table${tableID}`).append(tableRow);
                            }
                        };

                        $(`#table${tableID}toCSV`).hover(function () {
                            $(this).css(`background-color`, `#db34c5`)
                                .css(`border-color`, `#db34c5`);
                            $(`#table${tableID}`).css(`border-color`, `#db34c5`);
                            $(`#table-name${tableID}`).css(`background-color`, `#db34c5`)
                            .css(`border-color`, `#db34c5`);
                        }, function (){
                            $(this).css(`background-color`, `cadetblue`)
                            .css(`border-color`, `cadetblue`);
                            $(`#table${tableID}`).css(`border-color`, `cadetblue`);
                            $(`#table-name${tableID}`).css(`background-color`, `cadetblue`)
                            .css(`border-color`, `cadetblue`);
                        });

                        $(`#table${tableID}toCSV`).on(`click`, function () {

                            console.log(`You clicked to download CSV for "${input}: ${tableName}" table.`);

                            function exportTableToCSV(filename) {
                                var header = `**${tableName} data for ${input}**`
                                var csv = [];
                                var rows = document.querySelectorAll(`#table${tableID} tr`);
                                var footer1 = `Accessed via Atlanta Regional Commission (ARC)'s Georgia County Housing Profile Tool`;
                                var footer2 = `Data source: US Census / American Community Survey / 5-year estimates / 2012-16`;

                                csv.push(header.toUpperCase());
                                csv.push(``);

                                for (var i = 0; i < rows.length; i++) {
                                    var row = [], cols = rows[i].querySelectorAll("td, th");

                                    for (var j = 0; j < cols.length; j++)
                                        row.push(cols[j].innerText.replace(/,/g, ""));

                                    csv.push(row.join(","));
                                }

                                csv.push(``);
                                csv.push(footer1);
                                csv.push(footer2);

                                // Download CSV file
                                downloadCSV(csv.join("\n"), filename);
                            };

                            var shortTableName = tableName.replace(/\s/g, '');
                            var shortCountyName = input.replace(/\s/g, '').replace(/-/g, '');

                            if (shortCountyName.length > 15) {
                                shortCountyName = shortCountyName.substring(0, 14);
                            }

                            var filename = `${shortTableName}-${shortCountyName}.csv`

                            if (tableName === "Year Householder Moved Into Unit") {
                                filename = `YearMovedIn-${shortCountyName}.csv`
                            };

                            if (tableName === "Selected Monthly Owner Costs (SMOC)") {
                                filename = `SMOC-${shortCountyName}.csv`
                            };

                            if (tableName === "Selected Monthly Owner Costs as a Percentage of Household Income (SMOCAPI)") {
                                filename = `SMOCAPI-${shortCountyName}.csv`
                            };

                            if (tableName === "Gross Rent as a Percentaga of Household Income (GRAPI)") {
                                filename = `GRAPI-${shortCountyName}.csv`
                            };

                            exportTableToCSV(filename);
                        });
                    };

                    tableWrite(0, 20, "Housing Occupancy", 1, response);
                    tableWrite(20, 60, "Units in Structure", 2, response);
                    tableWrite(60, 104, "Year Structure Built", 3, response);
                    tableWrite(104, 148, "Rooms", 4, response);
                    tableWrite(148, 176, "Bedrooms", 5, response);
                    tableWrite(176, 196, "Housing Tenure", 6, response);
                    tableWrite(196, 224, "Year Householder Moved Into Unit", 7, response);
                    tableWrite(224, 244, "Vehicles Available", 8, response);
                    tableWrite(244, 284, "House Heating Fuel", 9, response);
                    tableWrite(284, 300, "Selected Characteristics", 10, response);
                    tableWrite(300, 316, "Occupants Per Room", 11, response);
                    tableWrite(316, 356, "Home Value", 12, response);
                    tableWrite(356, 368, "Mortgage Status", 13, response);
                    tableWrite(368, 436, "Selected Monthly Owner Costs (SMOC)", 14, response);
                    tableWrite(436, 500, "Selected Monthly Owner Costs as a Percentage of Household Income (SMOCAPI)", 15, response);
                    tableWrite(500, 540, "Gross Rent", 16, response);
                    tableWrite(540, 572, "Gross Rent as a Percentaga of Household Income (GRAPI)", 17, response);

                    $(`#downloadAll`).on(`click`, function () {

                        var tableNameArray = [
                            null,
                            "Housing Occupancy",
                            "Units in Structure",
                            "Year Structure Built",
                            "Rooms",
                            "Bedrooms",
                            "Housing Tenure",
                            "Year Householder Moved Into Unit",
                            "Vehicles Available",
                            "House Heating Fuel",
                            "Selected Characteristics",
                            "Occupants Per Room",
                            "Home Value",
                            "Mortgage Status",
                            "Selected Monthly Owner Costs (SMOC)",
                            "Selected Monthly Owner Costs as a Percentage of Household Income (SMOCAPI)",
                            "Gross Rent",
                            "Gross Rent as a Percentaga of Household Income (GRAPI)"
                        ]

                        console.log(`You clicked to download CSV for ALL tables of ${input}.`);

                        var shortCountyName = input.replace(/\s/g, '').replace(/-/g, '');

                        if (shortCountyName.length > 15) {
                            shortCountyName = shortCountyName.substring(0, 14);
                        };

                        var filename = `HousingProfile-${shortCountyName}.csv`;
                        var csv = [];


                        function exportAllToCSV() {
                            var header = `**Housing Profile for ${input}**`


                            var footer1 = `Accessed via Atlanta Regional Commission (ARC)'s Georgia County Housing Profile Tool`;
                            var footer2 = `Data source: US Census / American Community Survey / 5-year estimates / 2012-16`;

                            csv.push(header.toUpperCase());
                            csv.push("");
                            // csv.push("Inidicator,Estimate,MOE,Percent,%MOE");

                            for (e = 1; e < 18; e++) {

                               csv.push(tableNameArray[e].toUpperCase());

                                var rows = document.querySelectorAll(`#table${e} tr`);

                                for (var i = 0; i < rows.length; i++) {
                                    var row = [], cols = rows[i].querySelectorAll("th, td");

                                    for (var j = 0; j < cols.length; j++)
                                        row.push(cols[j].innerText.replace(/,/g, ""));

                                    csv.push(row.join(","));
                                }
                                csv.push(""); 
                            };

                            csv.push("");
                            csv.push(footer1);
                            csv.push(footer2);

                            // console.log(JSON.stringify(csv));

                            downloadCSV(csv.join("\n"), filename);
                        };

                        exportAllToCSV();

                        // Download CSV file
                    });

                }, 1500);
            };

            var apiKey = `106872a18b40c2368c03c0b84de5322f9e09b710`

            var queryURL = `https://api.census.gov/data/2016/acs/acs5/profile?key=${apiKey}&get=group(DP04)&for=county:${countyID}&in=state:13`;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(writeProfile);
        }
    });

    //CSV EXPORT

    function downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;

        // CSV file
        csvFile = new Blob([csv], { type: "text/csv" });

        // Download link
        downloadLink = document.createElement("a");

        // File name
        downloadLink.download = filename;

        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);

        // Hide download link
        downloadLink.style.display = "none";

        // Add the link to DOM
        document.body.appendChild(downloadLink);

        // Click download link
        downloadLink.click();
    }
}
