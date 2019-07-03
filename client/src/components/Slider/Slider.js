import React, {Component} from 'react';

import './Slider.sass';

import Slide_1 from './../../images/img-slider/bvlgari-blv-pour-homme.jpg';
import Slide_2 from './../../images/img-slider/dsquared2-wood-for-him-edt.jpg';
import Slide_3 from './../../images/img-slider/bvlgari-man-wood-neroli.jpg';
import Slide_4 from './../../images/img-slider/nikos-sculpture-pour-homme.jpg';
import Slide_5 from './../../images/img-slider/lancome-hypnose-homme-tester.jpg';
import Slide_6 from './../../images/img-slider/franck-olivier-bamboo-for-men_1.jpg';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    title: 'Bvlgari BLV Pour Homme',
                    description: 'Туалетная вода',
                    text: 'Редкая в наше время парфюмерная композиция Bvlgari BLV Pour Homme, несмотря на свой почтенный возраст, не перестает привлекать внимание любителей и профессионалов.',
                    eachSlide: `url(${Slide_1})`
                },
                {
                    title: 'Dsquared2 Wood pour Homme',
                    description: 'Туалетная вода',
                    text: 'Красивый и аккуратный мужской аромат Dsquared2 Wood pour Homme, появился на рынке Европы в самом начале осени. Сочетание традиционных компонентов подано тут с особой тщательностью, от чего получается совершенно особый ансамбль.',
                    eachSlide: `url(${Slide_2})`
                },
                {
                    title: 'Bvlgari Man Wood Neroli',
                    description: 'Парфюмированная вода',
                    text: 'Долгожданная мировая новинка Bvlgari Man Wood Neroli, сейчас является самым перспективным ароматом из знаменитой мужской серии Bvlgari Man Wood Essence. Выверенная до мелочей парфюмированная вода, создана в лесной и фужерной тематике, которая очень популярна в этом сезоне.',
                    eachSlide: `url(${Slide_3})`
                },
                {
                    title: 'Nikos Sculpture pour Homme',
                    description: 'Туалетная вода',
                    text: 'Уникальный мужской аромат Nikos Sculpture pour Homme, был выпущен более двадцати лет назад. Большинство запахов за это время просто исчезает с продажи, но эта туалетная вода только приобрела новых поклонников среди сильного пола. ',
                    eachSlide: `url(${Slide_4})`
                },
                {
                    title: 'Lancome Hypnose Homme',
                    description: 'Туалетная вода тестер с крышечкой',
                    text: 'Мужской и безумно харизматичный аромат Lancome Hypnose Homme, напоминает невидимый костюм, сшитый из драгоценных специй, по вашим личным меркам. Роскошная и неповторимая структура пирамиды, соткана из восточной и фужерной нежности, в которой вы можете оставаться кем пожелаете.',
                    eachSlide: `url(${Slide_5})`
                },
                {
                    title: 'Franck Olivier Bamboo for Men',
                    description: 'Туалетная вода',
                    text: 'Не смотря на свой возраст, аромат Franck Olivier Bamboo for Men, до сих пор остается предметом споров и интриг любителей парфюмерии. Такая ситуация сложилась по той причине, что за небольшой ценой и обманчивой внешностью, скрывается настоящий ураган эмоций, которые не так-то просто унять.',
                    eachSlide: `url(${Slide_6})`
                }
            ],
            autoplay: false,
            active: 0,
            max: 0
        }
        this.state.max = this.state.slides.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
        this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
        this.nextOne = this.nextOne.bind(this);
        this.prevOne = this.prevOne.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.intervalBetweenSlides(), 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    intervalBetweenSlides() {
        if (this.state.autoplay === true) {
            if (this.state.active === this.state.max - 1) {
                this.state.active = 0
            } else {
                this.state.active++
            }
            this.setState({
                active: this.state.active
            })
        }
    }

    toggleAutoPlay() {
        this.setState({
            autoplay: !this.state.autoplay
        })
    }

    nextOne() {
        (this.state.active < this.state.max - 1) ?
            this.setState({
                active: this.state.active + 1
            }) :
            this.setState({
                active: 0
            })
    }

    prevOne() {
        (this.state.active > 0) ?
            this.setState({
                active: this.state.active - 1
            }) :
            this.setState({
                active: this.state.max - 1
            })
    }

    dots(index, event) {
        this.setState({
            active: index
        })
    }

    isActive(value) {
        if (this.state.active === value) {
            return 'active'
        }
    }

    setSliderStyles() {

        const transition = this.state.active * -100 / this.state.slides.length

        return {
            width: (this.state.slides.length * 100) + '%',
            transform: `translateX(${transition}%`
        }
    }
    renderSlides() {
        return this.state.slides.map((item, index) => (
            <div
                key={index}
                style={{display: "flex", width: "100%"}}>
                <div className="slide-description">
                    <h3>
                        {item.title}
                    </h3>
                    <span>
                        {item.description}
                    </span>
                    <p>
                        {item.text}
                    </p>

                </div>
                <div
                    className='each-slide'
                    key={index}
                    style={{backgroundImage: item.eachSlide}}>
                </div>
            </div>
        ))
    }

    renderDots() {
        return this.state.slides.map((item, index) => (
            <li
                className={this.isActive(index) + 'dots'}
                key={index}
                ref="dots"
                onClick={this.dots.bind(this, index)}>
                <a>&#9679;</a>
            </li>
        ))
    }

    renderPlayStop() {
        let playStop;

        if (this.state.autoplay) {
            playStop = <svg fill='#FE980F' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path
                    d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg>;
        } else {
            playStop = <svg fill='#FE980F' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>;
        }
        return playStop
    }

    renderArrows() {
        return (
            <div>
                <button
                    type="button"
                    className="arrows prev"
                    onClick={this.prevOne}>
                    <svg fill='#C4C4BE' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>

                <button
                    type="button"
                    className="arrows next"
                    onClick={this.nextOne}>
                    <svg fill='#C4C4BE' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </div>
        )
    }

    render() {
        return (
            <div className="slider">
                <div
                    className="wrapper"
                    style={this.setSliderStyles()}>
                    {this.renderSlides()}
                </div>
                {this.renderArrows()}

                <ul className="dots-container">
                    {this.renderDots()}
                </ul>

                <a
                    className="toggle-play"
                    onClick={this.toggleAutoPlay}>
                    {this.renderPlayStop()}
                </a>
            </div>
        )
    }
}

export default Slider;