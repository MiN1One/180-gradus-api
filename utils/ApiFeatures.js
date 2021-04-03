class ApiFeatures {
    constructor(mongooseQuery, expressQuery) {
        this.mongooseQuery = mongooseQuery;
        this.expressQuery = expressQuery
    }

    filter() {
        const queryObj = { ...this.expressQuery };
        const removalList = ['project', 'page', 'sort', 'search', 'limit'];
        removalList.forEach(el => delete queryObj[el]);

        this.mongooseQuery = this.mongooseQuery.find(queryObj);

        return this;
    }

    sort() {
        if (this.expressQuery.sort) {
            const fields = this.expressQuery.sort.split(',').join(' ');

            this.mongooseQuery = this.mongooseQuery.sort(fields);
        } else 
            this.mongooseQuery = this.mongooseQuery.sort('-created');

        return this;
    }

    project() {
        if (this.expressQuery.project) {
            const fields = this.expressQuery.project.split(',').join(' ');

            this.mongooseQuery = this.mongooseQuery.select(fields);
        } else {
            this.mongooseQuery = this.mongooseQuery.select('-__v');
        }

        return this;
    }

    paginate() {
        if (this.expressQuery.limit && this.expressQuery.page) {
            const skip = +this.expressQuery.limit * (+this.expressQuery.page - 1)

            this.mongooseQuery = this.mongooseQuery.skip(skip).limit(+this.expressQuery.limit);
        }

        return this;
    }

    search() {
        if (this.expressQuery.search) {
            this.mongooseQuery = this.mongooseQuery.find({
                $text: {
                    $search: this.expressQuery.search,
                    $caseSensitive: false,
                    $diacriticSensitive: false
                }
            });
        }

        return this;
    }

    limit() {
        if (this.expressQuery.limit)
            this.mongooseQuery = this.mongooseQuery.limit(+this.expressQuery.limit);
        else this.mongooseQuery = this.mongooseQuery.limit(20);
        
        return this;
    }
}

module.exports = ApiFeatures;