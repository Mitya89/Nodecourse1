//======= Fighter Profile 2022======
const fighterProfile2022 = {
    organization: 'UFC',
    name: 'Dustin Poirier',
    division: 'Lightweight',
    position: 'Top two',
    winsRecord: '28',
    defeatsRecord: '7',
    drawsRecord: '0',
}
//======= Fighter Profile 2023======
const fighterProfile2023 = {
    organization: 'Bellator MMA',
    name: 'Dustin Poirier',
    division: 'Welterweight',
    position: 'Top two',
    winsRecord: '28',
    defeatsRecord: '7',
    drawsRecord: '0',
}
const merge = Object.assign(fighterProfile2022, fighterProfile2023);
console.log(merge);