import comics from "../data/comics";

const ComicsList = () => {
    return (
        comics.map(element => {
            const {id, series, thumb} = element;
            return (
                <div key={id} className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <figure>
                        <img className="w-100" src={thumb} alt={series} />
                    </figure>
                    <span>{series.toUpperCase()}</span>
                </div>
            )
        })
    )
};

export default ComicsList;