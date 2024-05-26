import MovieVideo from "../components/MovieVideo";

export default function HomePage() {
    return (
      <div className="container mx-auto py-20">
        <MovieVideo />
        <h1 className="text-4xl font-bold mb-4">Welcome to CineNex</h1>
        <p>Enjoy your stay!</p>
      </div>
    );
  }
  