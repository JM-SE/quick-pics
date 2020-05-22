import './css/ImageCard.css';
import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 20);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div
                className="image-card"
                style={{ gridRowEnd: `span ${this.state.spans}` }}
            >
                <img ref={this.imageRef} alt={description} src={urls.regular} />
                <div className="overlay">
                    <a
                        className="text-overlay"
                        href={urls.regular}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Click to enlarge
                    </a>
                </div>
            </div>
        );
    }
}

export default ImageCard;
