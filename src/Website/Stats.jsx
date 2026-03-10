import React, { useEffect, useRef } from 'react';

function Stats() {

  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el) => {
      const target = +el.getAttribute("data-target");
      let count = 0;

      const update = () => {
        const step = Math.ceil(target / 70);
        count += step;

        if (count >= target) {
          el.textContent = target;
        } else {
          el.textContent = count;
          requestAnimationFrame(update);
        }
      };

      update();
    });
  }, []);

  return (
    <section className="section pt-0">
      <div className="container lift">

        <div className="row g-4">

          <div className="col-lg-4" data-aos="fade-up">
            <div className="glass p-4 p-md-5 h-100">
              <h3 className="fw-bold mb-2">Results Matter</h3>
              <p className="text-muted-2 mb-0">
                A site should look premium and convert traffic into customers.
              </p>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="80">
            <div className="row g-3">

              <div className="col-md-4">
                <div className="card-modern p-4 text-center">
                  <div className="display-6 fw-black fw-bold">
                    <span ref={el => countersRef.current[0] = el} data-target="120">0</span>+
                  </div>
                  <div className="text-muted-2">Pages Designed</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-modern p-4 text-center">
                  <div className="display-6 fw-black fw-bold">
                    <span ref={el => countersRef.current[1] = el} data-target="35">0</span>+
                  </div>
                  <div className="text-muted-2">Projects Delivered</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card-modern p-4 text-center">
                  <div className="display-6 fw-black fw-bold">
                    <span ref={el => countersRef.current[2] = el} data-target="98">0</span>%
                  </div>
                  <div className="text-muted-2">Client Satisfaction</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;