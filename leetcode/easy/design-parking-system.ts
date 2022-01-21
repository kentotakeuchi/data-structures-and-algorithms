// https://leetcode.com/problems/design-parking-system/

// MINE
/*
class ParkingSystem {
    data: number[]
    constructor(big: number, medium: number, small: number) {
        this.data = [big, medium, small]
    }

    addCar(carType: number): boolean {
        switch(carType) {
            case 1:
                if(--this.data[0] < 0) return false
                break
            case 2:
                if(--this.data[1] < 0) return false
                break
            default:
                if(--this.data[2] < 0) return false
        }
        
        return true
    }
}
*/

// ANSWER: more precise
class ParkingSystem {
  count: number[]
  constructor(big: number, medium: number, small: number) {
    this.count = [big, medium, small]
  }

  addCar(carType: number): boolean {
    return this.count[carType - 1]-- > 0
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
