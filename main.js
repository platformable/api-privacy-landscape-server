const express = require("express");
const app = express();
require("dotenv").config();
app.listen(process.env.PORT || 5500);

const { google } = require("googleapis");
const sheets = google.sheets("v4");

const indexValues = {
  date: "",
  values: [],
  categories: [],
};

const companiesValues = {
  date: "",
  values: [],
  categories: [],
};

async function main() {
  indexValues.date = new Date();
  const authClient = await authorize();
  const request = await {
    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
    range: "Sheet1!A2:AV",
    valueRenderOption: "FORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;

    indexValues.categories = [];
    indexValues.values = [];
    const allData = response.values;
    allData.forEach((company, index) => {
      const item = {};
      item.id = index;
      item.name = company[0];
      item.url = company[1] || null;
      item.subcategory = company[2] || null;
      item.parentCategorySlug = company[3] || null;
      item.logo = company[4];
      item.description = company[5] || null;
      item.openSource = company[6] || null;
      item.crunchbase = company[7] || null;
      item.linkedin = company[8] || null;
      item.twitter = company[9] || null;
      item.github = company[10] || null;
      item.developerPortal = company[11] || null;
      item.yearFounded = company[12] || null;
      item.numberOfFounders = company[13] || null;
      item.founderNames = company[14] || null;
      item.headquartersCountry = company[15] || null;
      item.headquartersCity = company[16] || null;
   /*    item.diversitySpotlightUs = company[17] || null */
      item.womanInManagement = company[17] || null;
      item.nonWhitePeopleInManagement = company[18] || null;
      /* item.diversityScore=company[19] || null; */
      item.headcount = company[19] || null;
      item.numberOfPositionsVacantInQ12022 = company[20] || null;
     /*  item.numberOfPositionsVacantInPastYear = company[23] || null; */
      item.estimatedRevenueRange=company[21] || null
      item.pricingModel = company[22] || null;
      item.pricingPage = company[23] || null;
      item.knownIndustriesWorkingIn = company[24] || null;
      item.numbersOfCustomers = company[25] || null; 
      item.namesOfActualCustomersAsPerWebsite = company[26] || null
      item.pageAboutBanking = company[27] || null;
      item.pageAboutHealth = company[28] || null;
      item.pageAboutSustainability = company[29] || null;
      item.pageAboutGovernment = company[30] || null;
/*       item.totalNumberOfNewProducFeaturesInLastYear = company[34] || null; */
      /* item.totalProducts = company[35] || null; */
      item.patentsGranted = company[31] || null;
      item.acquisitions = company[32] || null;
/*       item.knownStandardsUsedIntoPlatform = company[38] || null; */
      item.knownPartnershipsApi = company[33] || null;
 /*      item.monthlyWebsiteVisits = company[40] || null;
      item.monthlyWebsiteVisitsGrowth = company[41] || null; */
      item.itSpend = company[34] || null;
      item.activeTechCount = company[35] || null;
      item.stage = company[36] || null;
      item.totalFunding = company[37] || null;
      item.lastFundingDate = company[38] || null;
      item.top5Investors = company[39] || null;
      item.numberLeadOfLeadInvestors = company[40] || null;
      item.numberOfInvestors = company[41] || null;
      item.acquiredBy = company[42] || null;
      item.acquisitionPrice = company[43] || null;
      item.ipoDate = company[44] || null;
      item.moneyRaisedAtIpo = company[45] || null;
      item.valuationAtIpo = company[46] || null;
      item.contactEmail = company[47] || null;
      indexValues.values.push(item);
    });
  } catch (err) {
    console.error(err);
  }
}

async function getCompanies() {
  companiesValues.date = new Date();

  const authClient = await authorize();
  const request = await {
    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
    range: "Sheet1!A2:AV",
    valueRenderOption: "FORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;

    companiesValues.categories = [];
    companiesValues.values = [];
    const allData = response.values;
    allData.forEach((company, index) => {
      const item = {};
      item.id = index;
      item.name = company[0];
      item.url = company[1] || null;
      item.subcategory = company[2] || null;
      item.parentCategorySlug = company[3] || null;
      item.logo = company[4];
      item.description = company[5] || null;
      item.openSource = company[6] || null;
      item.crunchbase = company[7] || null;
      item.linkedin = company[8] || null;
      item.twitter = company[9] || null;
      item.github = company[10] || null;
      item.developerPortal = company[11] || null;
      item.yearFounded = company[12] || null;
      item.numberOfFounders = company[13] || null;
      item.founderNames = company[14] || null;
      item.headquartersCountry = company[15] || null;
      item.headquartersCity = company[16] || null;
   /*    item.diversitySpotlightUs = company[17] || null */
      item.womanInManagement = company[17] || null;
      item.nonWhitePeopleInManagement = company[18] || null;
      /* item.diversityScore=company[19] || null; */
      item.headcount = company[19] || null;
      item.numberOfPositionsVacantInQ12022 = company[20] || null;
     /*  item.numberOfPositionsVacantInPastYear = company[23] || null; */
      item.estimatedRevenueRange=company[21] || null
      item.pricingModel = company[22] || null;
      item.pricingPage = company[23] || null;
      item.knownIndustriesWorkingIn = company[24] || null;
      item.numbersOfCustomers = company[25] || null; 
      item.namesOfActualCustomersAsPerWebsite = company[26] || null
      item.pageAboutBanking = company[27] || null;
      item.pageAboutHealth = company[28] || null;
      item.pageAboutSustainability = company[29] || null;
      item.pageAboutGovernment = company[30] || null;
/*       item.totalNumberOfNewProducFeaturesInLastYear = company[34] || null; */
      /* item.totalProducts = company[35] || null; */
      item.patentsGranted = company[31] || null;
      item.acquisitions = company[32] || null;
/*       item.knownStandardsUsedIntoPlatform = company[38] || null; */
      item.knownPartnershipsApi = company[33] || null;
 /*      item.monthlyWebsiteVisits = company[40] || null;
      item.monthlyWebsiteVisitsGrowth = company[41] || null; */
      item.itSpend = company[34] || null;
      item.activeTechCount = company[35] || null;
      item.stage = company[36] || null;
      item.totalFunding = company[37] || null;
      item.lastFundingDate = company[38] || null;
      item.top5Investors = company[39] || null;
      item.numberLeadOfLeadInvestors = company[40] || null;
      item.numberOfInvestors = company[41] || null;
      item.acquiredBy = company[42] || null;
      item.acquisitionPrice = company[43] || null;
      item.ipoDate = company[44] || null;
      item.moneyRaisedAtIpo = company[45] || null;
      item.valuationAtIpo = company[46] || null;
      item.contactEmail = company[47] || null;

      companiesValues.values.push(item);
    });
  } catch (err) {
    console.error(err);
  }
}

main();


async function authorize() {
  let authClient = await process.env.NEXT_PUBLIC_GOOGLE_KEY;
  if (authClient == null) {
    throw Error("authentication failed");
  }
  return authClient;
}

app.get("/", function (req, res) {
  main();

  res.status(200).send(indexValues);
});

app.get("/companies", function (req, res) {
  getCompanies();
  res.status(200).send(companiesValues);
});
