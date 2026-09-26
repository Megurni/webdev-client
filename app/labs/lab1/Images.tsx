export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      An image that represents my interest in web development:
      <br />
      <img
        id="wd-your-image"
        src="/images/web-development.svg"
        width="300px"
        alt="Browser window containing colorful web development code"
      />
      <br />
      An extra sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/PIA12348/PIA12348~orig.jpg"
        width="200px"
        alt="A sample illustration of a planet in space"
      />
    </div>
  );
}
