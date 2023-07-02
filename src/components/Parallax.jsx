import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function IntermediateParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={ref}>
      <motion.img
        src="/themilkyway.jpeg"
        alt="A descriptive alt text"
        style={{ y: imgY }}
      />
      <motion.p style={{ y: textY, color: "red" }}>
        the quick brown fox jumps over the lazy dog the quick brown fox jumps
        over the lazy dog the quick brown fox jumps over the lazy dog the quick
        brown fox jumps over the lazy dog the quick brown fox jumps over the
        lazy dog the quick brown fox jumps over the lazy dog
      </motion.p>
      <div style={{ height: "200vh" }} />
    </div>
  );
}

export function SimpleParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <div>
      <div style={{ width: "100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum
        tenetur assumenda a repellat recusandae, sed sunt corrupti incidunt
        obcaecati, odio, quod saepe ex eveniet harum accusantium minima optio
        magni. Sequi quod provident nihil voluptatem rerum repellat id porro,
        cumque pariatur iusto dolore ipsa libero ipsum facilis, dignissimos
        culpa! Molestias nostrum autem quod corporis similique, corrupti numquam
        nobis libero facilis, nemo fugiat quibusdam debitis inventore delectus
        quae tempore, voluptates accusantium. Corrupti, ipsum eligendi. Quasi
        eligendi delectus soluta amet a rerum inventore distinctio adipisci
        velit dignissimos ullam voluptatibus magni neque perspiciatis,
        voluptates debitis dicta officiis sit impedit minima reiciendis
        assumenda ducimus!
      </div>
      <div
        ref={ref}
        style={{
          height: "300px",
          //overflow: "hidden",
          outline: "2px solid red",
          scale: 2,
        }}
      >
        <motion.img
          src="/themilkyway.jpeg"
          alt="A descriptive alt text"
          style={{ y, height: "200%" }}
        />
      </div>
      <div style={{ width: "100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum
        tenetur assumenda a repellat recusandae, sed sunt corrupti incidunt
        obcaecati, odio, quod saepe ex eveniet harum accusantium minima optio
        magni. Sequi quod provident nihil voluptatem rerum repellat id porro,
        cumque pariatur iusto dolore ipsa libero ipsum facilis, dignissimos
        culpa! Molestias nostrum autem quod corporis similique, corrupti numquam
        nobis libero facilis, nemo fugiat quibusdam debitis inventore delectus
        quae tempore, voluptates accusantium. Corrupti, ipsum eligendi. Quasi
        eligendi delectus soluta amet a rerum inventore distinctio adipisci
        velit dignissimos ullam voluptatibus magni neque perspiciatis,
        voluptates debitis dicta officiis sit impedit minima reiciendis
        assumenda ducimus!
      </div>
    </div>
  );
}
