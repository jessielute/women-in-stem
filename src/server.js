var request = require("axios"),
    cheerio = require("cheerio"),
    url = "https://www150.statcan.gc.ca/n1/pub/75-006-x/2013001/article/11874/c-g/desc/desc01-eng.htm"
var express = require("express")
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8080);
console.log('app listening on port 8080')

//App.get(/someEndPoints, (req, res) => {
//let womanData = getWomanData();
//let manData = getManData()

//let results = {womanData: womanData, manData: manData};
//res.send(results)
//}}

app.get("/allData", async (req, res) => {
    let womenData = await getWomen();

    res.send({ womenData: womenData, menData: menData });
})

//finds stats of how many female graduates in each area of STEM
const getWomen = async () => {
    let resultsIWant = await request(url).then((result) => {
        console.log("started!")
        let body = result.data;
        var $ = cheerio.load(body);
        let wantedRows = [2, 3, 4];
        let resultsArray = [];
        for (i in wantedRows) {
            let title = $(`#hdt1r1c${wantedRows[i]}`).html()
            let result = $(`[headers='t1stub1 hdt1r1c${wantedRows[i]}']`).html()
            resultsArray.push(({ title: title, data: result }));
        }
        console.log(resultsArray);
        return resultsArray;
    }).catch(err => { console.log("We’ve encountered an error: " + err) })
    return resultsIWant;
}


//finds stats of how many male graduates in each area of STEM
const getMen = async () => {
    let menResultsIWant = await request(url).then((result) => {
        console.log("started!")
        let body = result.data;
        var $ = cheerio.load(body);
        let wantedRows = [2, 3, 4];
        let resultsArray = [];
        for (i in wantedRows) {
            let title = $(`#hdt1r1c2${wantedRows[i]}`).html()
            let result = $(`[headers='t1stub1 hdt1r1c${wantedRows[i]}']`).html()
            resultsArray.push(({ title: title, data: result }));
        }
        console.log(resultsArray);
        return resultsArray;
    }).catch(err => { console.log("We’ve encountered an error: " + err) })
    return menResultsIWant;
}
