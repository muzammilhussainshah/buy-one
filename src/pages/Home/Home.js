import React, { useState } from 'react';

function Home() {
  const [selectedId, setSelectedId] = useState(null);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ];

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <div
        onClick={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
        className="item"
      >
        <p className="title">{item.title}</p>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider">
          <div className="slider-items">
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;