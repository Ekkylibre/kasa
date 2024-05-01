import './banner.css';

export default function Banner({ text, bannerImg }) {

    return (
        <div className='banner'>
            <div className='banner-container'>
                <img src={bannerImg} alt="Banner" />
                <h1>{text}</h1>
            </div>
        </div>
    )
}
