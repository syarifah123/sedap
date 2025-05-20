import ErrorComponent from "../components/ErrorComponent";

export default function ErrorPage400() {
  return (
    <div>
      <ErrorComponent
        code={400}
        description="Oops!"
        image="/img/Error/Cat-Festival-GIF-by-W-W-unscreen.gif"
      />
    </div>
  );
}
