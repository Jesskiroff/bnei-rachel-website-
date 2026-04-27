// src/pages/Faculty.jsx
import PageBanner from '../PageBanner';
import facultyImg from '../assets/rabbiMatzahBaking.jpeg';

function Faculty() {
  return (
    <div>
      <PageBanner title="Faculty" image={facultyImg} />
      <div className="page-content">
        <h2>Our Faculty</h2>
      </div>
    </div>
  );
}
export default Faculty;