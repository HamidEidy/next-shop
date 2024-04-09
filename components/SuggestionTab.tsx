import Image from 'next/image';
import { Slider } from '../libraries/slickSliderClient'
import { getFetch } from '@/utils/fetch';
import Title from './Title';
import Card from './Card';
const SuggestionTab = async () => {
    const Products = await getFetch('/random-products?count=8')
    const settings = {
        style: { textAlign: 'center' },
        rtl: false,
        infinite: true,
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },

        ]
    };
    return (
        <div dir='ltr'>
            <div className="bg-svg">

                <div className="container mx-auto w-5/6 lg:w-2/3 py-12">
                    <section className="flex justify-center flex-col text-center">
                        <Title title={'محصولات پیشنهادی'} />
                        <div>
                            <div>
                                <Slider {...settings} >
                                    {Products.data.map((product: any) => (
                                        <div className="px-2" key={product.id}>

                                         <Card product={product} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </section >
                </div>
            </div>
            <div style={{ height: '100px', width: '100vw' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100px', width: '100vw' }}><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ fill: '#eceeef7f' }}></path></svg></div>

        </div>
    )
}
export default SuggestionTab;