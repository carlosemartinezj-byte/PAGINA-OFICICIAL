import React from 'react';

interface EngineeringCardProps {
  title: string;
  description: string;
  icon: React.ElementType; // Using React.ElementType for Lucide icons
  colorClass: string;
}

const EngineeringCard: React.FC<EngineeringCardProps> = ({ title, description, icon: Icon, colorClass }) => {
  return (
    <div className={`eng-card group ${colorClass}`}>
      <span className="eng-icon">
        <Icon size={24} strokeWidth={2} />
      </span>
      <h4 className="eng-title">{title}</h4>
      <p className="eng-desc">{description}</p>
      <div className="eng-shine"></div>
      <div className="eng-background">
        <div className="eng-tiles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`eng-tile eng-tile-${i + 1}`}></div>
          ))}
        </div>
        <div className="eng-line eng-line-1"></div>
        <div className="eng-line eng-line-2"></div>
        <div className="eng-line eng-line-3"></div>
      </div>

      {/* Internal style block for complex animations and custom CSS variables specific to this component */}
      <style>{`
        /* ESTILOS DE TARJETAS DE INGENIERÍA */
        .eng-card {
          --background-color: #FFFFFF;
          --text-color: #64748B;
          --card-background-color: #FFFFFF;
          --card-border-color: rgba(0, 0, 0, 0.05);
          --card-box-shadow-1: rgba(0, 0, 0, 0.02);
          --card-box-shadow-2: rgba(0, 0, 0, 0.1);
          --card-label-color: #3A432E;
          --card-icon-color: #3A432E;
          --card-icon-background-color: rgba(58, 67, 46, 0.05);
          --card-icon-border-color: rgba(58, 67, 46, 0.1);
          --card-shine-opacity: .4;
          --card-line-color: rgba(0, 0, 0, 0.04);
          --card-tile-color: rgba(255, 173, 30, 0.08);

          &.eng-orange { --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(255, 173, 30, 0) 0deg, #FFAD1E 25deg, rgba(255, 173, 30, 0.1) 295deg, rgba(255, 173, 30, 0) 360deg); --card-hover-icon-color: #FFAD1E; }
          &.eng-yellow { --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(252, 211, 77, 0) 0deg, #FBBF24 25deg, rgba(252, 211, 77, 0.1) 295deg, rgba(252, 211, 77, 0) 360deg); --card-hover-icon-color: #FBBF24; }
          &.eng-cyan { --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(34, 211, 238, 0) 0deg, #06B6D4 25deg, rgba(34, 211, 238, 0.1) 295deg, rgba(34, 211, 238, 0) 360deg); --card-hover-icon-color: #06B6D4; }

          background-color: var(--background-color);
          box-shadow: 0px 3px 6px var(--card-box-shadow-1), 0px 8px 15px var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
          padding: 40px 24px 24px 24px;
          border-radius: 32px;
          cursor: pointer;
          position: relative;
          transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          z-index: 1;
        }

        .eng-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 15px 30px rgba(0,0,0,0.12);
        }

        .eng-icon {
          z-index: 2;
          position: relative;
          display: table;
          padding: 10px;
          margin-bottom: 20px;
        }

        .eng-icon::after {
          content: '';
          position: absolute;
          inset: 0px;
          border-radius: 14px;
          background-color: var(--card-icon-background-color);
          border: 1px solid var(--card-icon-border-color);
          transition: all .25s;
        }

        .eng-icon svg {
          position: relative;
          z-index: 1;
          display: block;
          color: var(--card-icon-color);
          transition: color .25s;
        }

        .eng-card:hover .eng-icon svg {
          color: white;
        }
        .eng-card:hover .eng-icon::after {
          background-color: var(--card-hover-icon-color); /* Use the specific color variable */
          border-color: var(--card-hover-icon-color);
          transform: rotate(45deg);
        }

        .eng-title {
          z-index: 2;
          position: relative;
          margin: 10px 0 10px 0;
          font-weight: 900;
          font-size: 1.2rem;
          color: var(--card-label-color);
          text-transform: uppercase;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .eng-desc {
          z-index: 2;
          position: relative;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-color);
          font-weight: 500;
        }

        .eng-shine {
          border-radius: inherit;
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          opacity: 0;
          transition: opacity .5s;
        }

        .eng-card:hover .eng-shine {
          opacity: 1;
        }

        .eng-shine:before {
          content: '';
          width: 150%;
          padding-bottom: 150%;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          bottom: 55%;
          filter: blur(40px);
          opacity: var(--card-shine-opacity);
          transform: translateX(-50%);
          background-image: var(--card-shine-gradient);
        }

        .eng-background {
          border-radius: inherit;
          position: absolute;
          inset: 0;
          overflow: hidden;
          -webkit-mask-image: radial-gradient(circle at 50% 0%, black 0%, black 20%, transparent 80%);
          mask-image: radial-gradient(circle at 50% 0%, black 0%, black 20%, transparent 80%);
        }

        .eng-tiles {
          opacity: 0;
          transition: opacity .25s;
        }

        .eng-card:hover .eng-tiles {
          opacity: 1;
          transition-delay: .25s;
        }

        .eng-tile {
          position: absolute;
          background-color: var(--card-tile-color);
          animation-duration: 8s;
          animation-iteration-count: infinite;
          opacity: 0;
        }

        .eng-card:hover .eng-tile {
          animation-name: tile-anim;
        }

        .eng-tile-1 { top: 0; left: 0; height: 10%; width: 22.5%; }
        .eng-tile-2 { top: 0; left: 22.5%; height: 10%; width: 27.5%; animation-delay: -6s; }
        .eng-tile-3 { top: 0; left: 50%; height: 10%; width: 27.5%; animation-delay: -4s; }
        .eng-tile-4 { top: 0; left: 77.5%; height: 10%; width: 22.5%; animation-delay: -2s; }
        .eng-tile-5 { top: 10%; left: 0; height: 22.5%; width: 22.5%; animation-delay: -4s; }
        .eng-tile-6 { top: 10%; left: 22.5%; height: 22.5%; width: 27.5%; animation-delay: -2s; }
        .eng-tile-7 { top: 10%; left: 50%; height: 22.5%; width: 27.5%; }
        .eng-tile-8 { top: 10%; left: 77.5%; height: 22.5%; width: 22.5%; animation-delay: -4s; }
        .eng-tile-9 { top: 32.5%; left: 50%; height: 22.5%; width: 27.5%; animation-delay: -6s; }
        .eng-tile-10 { top: 32.5%; left: 77.5%; height: 22.5%; width: 22.5%; animation-delay: -2s; }

        @keyframes tile-anim {
          0%, 12.5%, 100% { opacity: 1; }
          25%, 82.5% { opacity: 0; }
        }

        .eng-line {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity .35s;
        }

        .eng-card:hover .eng-line {
          opacity: 1;
        }

        .eng-line:before, .eng-line:after {
          content: '';
          position: absolute;
          background-color: var(--card-line-color);
          transition: transform .35s;
        }

        .eng-line:before { left: 0; right: 0; height: 1px; transform-origin: 0 50%; transform: scaleX(0); }
        .eng-line:after { top: 0; bottom: 0; width: 1px; transform-origin: 50% 0; transform: scaleY(0); }

        .eng-card:hover .eng-line:before { transform: scaleX(1); }
        .eng-card:hover .eng-line:after { transform: scaleY(1); }

        .eng-line-1:before { top: 10%; }
        .eng-line-1:after { left: 22.5%; }
        .eng-line-2:before { top: 32.5%; }
        .eng-line-2:after { left: 50%; }
        .eng-line-3:before { top: 55%; }
        .eng-line-3:after { right: 22.5%; }
      `}</style>
    </div>
  );
};

export default EngineeringCard;
