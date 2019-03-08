const site = new DatArchive(window.location)

export class FeedModel {
    constructor() {
    }

    //If you don't define the class as async, you get "Unexpected Reserved Word" error
    async list ( {feedDir, limit, reverse} = {} ) {        
        limit = limit || 20
        var postNames = await site.readdir(feedDir)
        
        postNames.sort()
        if (reverse) postNames.reverse()

        postNames = postNames.slice(0, limit)
        return Promise.all(postNames.map( async filename => {
            
            //First try:
            /*
            return {
                filename, 
                value: JSON.parse(await site.readFile('/data/feed/' + filename))
                //note: if JSON.parse fails on any file it will cause exception
            }
            */

            //Second try: using spread operator
            var post = JSON.parse(await site.readFile(feedDir + '/' + filename))
            return {filename, ...post}
        }))
    }
}