import comics from "../data/comics";

const ComicsList = () => {
    return (
        comics.map(element => {
            const {id, series, thumb} = element;
            return (
                <div key={id} className="col-2">
                    <figure>
                        <img className="w-100" src={thumb} alt={series} />
                    </figure>
                    <span>{series}</span>
                </div>
            )
        })
    )
};

export default ComicsList;