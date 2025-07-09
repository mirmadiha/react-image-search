import './ImageList.css'
import ImageShow from './ImageShow';
function ImageList({images}){
    console.log("images received", images);
    const renderedImages=images.map((image)=>{
                return <ImageShow key={image.id} image={image}/>
            })
    return (
        <div className="image-container">
           {renderedImages}
        </div>
    );
}

export default ImageList;