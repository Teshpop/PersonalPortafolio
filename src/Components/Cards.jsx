const Cards = ({ title, img, desc, tool, link }) => {
  return (
    <div className="relative bg-white bg-opacity-[0.5] rounded-lg shadow-md flex flex-col w-full h-auto max-h-[300px] group">
      {/* Imagen de banner en la parte superior */}
      <div className="w-full h-[40%]">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>

      {/* Contenedor del título y descripción */}
      <div className="p-4 flex flex-col items-center gap-4">
        <h1 className="text-black text-[1.5rem] uppercase font-semibold">
          {title}
        </h1>
        <p className="text-black text-[1rem] mb-4 text-center">{desc}</p>
      </div>

      {/* Overlay con la imagen de herramienta y botón, aparece al hacer hover */}
      <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
        <div className="w-[20%] h-[20%] mb-4">
          <img src={tool} alt="tool" className="w-full h-full object-contain" />
        </div>
        <a
          href={link}
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Cards;
