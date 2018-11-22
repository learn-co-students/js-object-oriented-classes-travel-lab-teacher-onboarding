class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }

  startDate() {
    return this.startDate
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() -1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginning = beginningLocation
    this.ending = endingLocation
  }

  blocksTravelled() {
    const eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const streets = Math.abs(this.beginning.vertical - this.ending.vertical)
    const streetStart = eastWest.findIndex((e) => e == this.beginning.horizontal)
    const streetEnd = eastWest.findIndex((e) => e == this.ending.horizontal)
    const avenuesTravelled = Math.abs(streetStart - streetEnd)
    if (avenuesTravelled !== 0 && streets !== 0) {
      return avenuesTravelled + streets
    }
    else if (avenuesTravelled !== 0) {
      return avenuesTravelled
    } else if (streets !== 0) {
      return streets
    }
  }

  estimatedTime(bool) {
    const blocks = this.blocksTravelled()
    if (!bool) {
      return blocks * (1/3);
    }
    return blocks * 0.5;
  }
}
