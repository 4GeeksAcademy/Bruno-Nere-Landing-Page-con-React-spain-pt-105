import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./CardComponents";
import Footer from "./Footer";


const Home = () => {
    const tours = [
        {
            image: "https://parquesharrypotter.com/wp-content/uploads/parque-harry-potter-orlando-universal.jpeg",
            title: "Harry Potter",
            description: "Harry Potter"
        },
        {
            image: "https://images.ecestaticos.com/fnFh7DfeyBnrb0WqV9_Ihb52Ixo=/0x0:2272x1515/996x747/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F66e%2Fe08%2F135%2F66ee08135779d460d138b7d081d13c34.jpg",
            title: "Disney",
            description: "Disney"
        },
        {
            image: "https://i.ytimg.com/vi/ZOgB_Hj3OQs/maxresdefault.jpg",
            title: "Warner Madrid",
            description: "Warner Madrid"
        },
        {
            image: "https://resizer.glanacion.com/resizer/v2/universal-kids-estara-ubicado-en-texas-esta-IW43DGEDZNDP3NU2GXIQNOG3QQ.png?auth=2cead5a4166de16c07e9c04aabb3009322155b6cdf8c0ce38a4df2fef737ec85&width=1280&height=854&quality=70&smart=true",
            title: "Universal",
            description: "Universal"
        }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Jumbotron />
            <div className="container my-4 flex-grow-1">
                <h2 className="text-center mb-4 fw-bold">Nuestros Destinos</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {tours.map((tour, index) => (
                        <div className="col" key={index}>
                            <Card {...tour} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home; 