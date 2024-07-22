import "../styles/homePageStyles.css";

// Functional component to render hero items
function HomePage({ items }) {
  return (
    <>
      {items.map((item, index) => (
        // Each hero item container requires a unique key
        <div key={index}>
          <div className="hero">
            {/* Image for the Home item */}
            <img src={item.image} alt={item.alt} className={item.className} />
            <img
              src={item.image2}
              alt={item.alt2}
              className={item.className2}
            />
          </div>
          <div className={item.homeText}>
            <h1 className="edit">{item.pageHeading}</h1>
          </div>
          <div className={item.textDiv}>
            <p className={item.textStyle}>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default HomePage;
