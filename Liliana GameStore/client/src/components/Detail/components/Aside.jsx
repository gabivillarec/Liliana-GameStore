


const AsideDetail = ({detail}) =>{
    return(
        <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href={detail.image}
                >
                <img
                    style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }}
                    className="rounded-4 fit"
                    src={detail.image}
                    alt={detail.name}
                />
                </a>
            </div>
        </aside>
    )
}

export default AsideDetail