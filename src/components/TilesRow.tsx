import * as React from "react";


interface TileData {
    href: string;
    imageSrc: string;
  }
  
  interface TilesRowProps {
    tileData: TileData[];
  }
  
  const TilesRow: React.FC<TilesRowProps> = ({ tileData }) => {
    const chunkedTileData = chunkArray(tileData, 4);
  
    return (
      <div className="my-8">
        {chunkedTileData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center space-x-6 mb-8">
            {row.map((tile, index) => (
              <a
                key={index}
                href={tile.href}
                className="group overflow-hidden relative w-48 h-48 rounded-lg p-2 border border-gray-200 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={tile.imageSrc}
                  alt="Tile"
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  function chunkArray(array: any[], chunkSize: number) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  }
  
  export default TilesRow;
  