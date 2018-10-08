class Driver {
  constructor(name, stringDate){
    this.name = name
    this.startDate = new Date(stringDate)
    this.yearsExperienceFromBeginningOf = (year) => {
      return year - this.startDate.getFullYear() - 1
    }
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    this.blocksTravelled = () => {
      let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue',
      'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
      const beginLoc = (element) => element === this.beginningLocation["horizontal"]
      const endLoc = (element) => element === this.endingLocation["horizontal"]
      const hoz = eastWest.findIndex(beginLoc) - eastWest.findIndex(endLoc)
      const vert = this.beginningLocation["vertical"] - this.endingLocation["vertical"]
      return Math.abs(hoz + vert)
    }
    this.estimatedTime = (peak = false) => {
        return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
    }
  }
}

