import './banner.css';

export default function Banner() {
    const text = "Chez vous, partout et ailleurs";
    const bannerImg = "/img1.jpg";
    return (
            <div className='banner'>
                <div className='banner-container'>
                    <img src={bannerImg} alt="Banner" />
                    <h1>{text}</h1>
                </div>
            </div>
    )
}
