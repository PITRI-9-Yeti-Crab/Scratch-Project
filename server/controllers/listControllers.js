//import film list model 


const listController = {
    
    async getList(req, res, next) {
        console.log("Inside get list controller")
    },

    async createList(req, res, next) {
        console.log("inside create list controller"); 

    }, 

    async deleteList(req, res, next) {
        console.log("inside delete list controller"); 

    }, 

    async updateList(req, res, next) {
        console.log("inside update list controller"); 

    }, 

    async shareList(req, res, next) {
        console.log("inside share list controller"); 
    }
}

module.exports = listController; 