interface IStar {
  dimension: number;
}

/**
 *
 * @returns start
 */
function Star({ dimension }: IStar): JSX.Element {
  return (
    <svg width={dimension} height={dimension} viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 0.386108L31.2258 17.041L48 24.5877L31.2258 31.8742L24 48.7894L16.5161 31.8742L0 24.5877L16.5161 17.041L24 0.386108Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default Star;
