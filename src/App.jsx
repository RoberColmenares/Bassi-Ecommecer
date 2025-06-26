import Bienvenida from './Componets/Bienvenida'; // Ajusta la ruta

function App() {
  return (
    <>
      <Barra />
      <Header />
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/home" element={<Principal />} />
        <Route path="/pizza/:id" element={<DetallePizza />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
