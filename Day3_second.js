// Create a array of  country objects having name capital and population as properties. Print the countries whose population is less than 2000




let country=[
    {
        Name:"Australia",
        Capital:"Canberra",
        Population:1250,
    },
    {
        Name: "India",
        Capital:"Delhi",
        Population:5000,
    },
    {
        Name: "China",
        Capital:"Beijing",
        Population:6700,
    },
    {
        Name:"Japan",
        Capital:"Tokyo",
        Population:750,
    },
    {
        Name:"America",
        Capital:"Washington, D.C.",
        Population:3500,
    }


]


for(let n = 0; n<country.length; n++){
    if(country[n].Population<2000){
        console.log(country[n].Name);
    }
    
}