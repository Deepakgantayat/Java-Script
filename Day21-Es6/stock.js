var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5]
var portfolio = [['XYZ', 20], ['BBB', 10]]

function totalPortfolioValue(ticker, portfolio){
    const result = {}
    let total = 0
    portfolio.forEach(function(portItem){
        const index = ticker.indexOf(portItem[0])
        if(index == -1){
            result[portItem[0]] = 'company does not exist'
            return
        }
        total += portItem[1] *ticker[index + 1]
        result[portItem[0]] = portItem[1] * ticker[index + 1]

    })
    result.total = total 
    return result
}
console.log(totalPortfolioValue(ticker, portfolio))
//{ XYZ: 4000, BBB: 50, total: 4050 }