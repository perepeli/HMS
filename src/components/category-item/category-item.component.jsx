import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, text } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title} &#8688;</h2>
        <p style={{fontSize: "18px"}}>{text}</p>
      </div>
    </div>
  );
};

export default CategoryItem;