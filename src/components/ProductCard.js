import "./ProductCard.css";

export const ProductCard = ({ product, category }) => {
  const {name, price, offerPrice, image} = product;

  const removeTrailingSlash = (url) => {
    return url.endsWith('/') ? url.slice(0, -1) : url;
  };

  const removePrecedingSlash = (path) => {
    return path.startsWith('/') ? path.slice(1) : path;
  };

  const handleEnquireNow = () => {
    const baseUrl = removeTrailingSlash(window.location.origin);
    const imagePath = removePrecedingSlash(image);
    const imageUrl = `${baseUrl}/PreranaTrendyCollection/${imagePath}`;
    const phoneNumber = '7391906418';
    const message = `Hello, I am interested in the product "${name}" from the category "${category}". Here are the details: 
    \nProduct Name: ${name}
    \nCategory: ${category}
    \nPrice: Rs ${price}\nOffer Price: Rs ${offerPrice}
    \nImage: ${imageUrl}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="productCard">
      <img src={'/PreranaTrendyCollection' + image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        { (price !== undefined || offerPrice !== undefined) && 
          <p className="price">
            { price !== undefined && <span className="originalPrice">Rs {price}</span> }
            { offerPrice !== undefined && <span className="offerPrice"> Rs {offerPrice}</span> }
          </p>
        }
        <button onClick={handleEnquireNow}>Enquire Now</button>
      </div>
    </div>
  )
}
