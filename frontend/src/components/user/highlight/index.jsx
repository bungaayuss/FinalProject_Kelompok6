export default function Highlight() {
    const categories = [
      { icon: "fa-ring", name: "Modern Wedding" },
      { icon: "fa-birthday-cake", name: "Aesthetic Birthday" },
      { icon: "fa-briefcase", name: "Corporate Event" },
      { icon: "fa-graduation-cap", name: "Graduation Party" },
      { icon: "fa-heart", name: "Rustic Engagement" },
    ];
  
    return (
      <section
        className="container my-5 text-center"
        style={{ maxWidth: "100%", paddingLeft: 20, paddingRight: 20 }}
      >
        <h2 className="text-center fw-bold text-primary-custom mb-4">
          Discover Events You'll Love
        </h2>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-light d-flex flex-column align-items-center justify-content-center"
              style={{
                flex: "1 1 14%",
                maxWidth: "14%",
                minWidth: 120,
                height: 120,
                borderRadius: "10px",
                padding: "20px",
                boxSizing: "border-box",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  marginBottom: 12,
                }}
              >
                <i
                  className={`fa-solid ${cat.icon}`}
                  style={{ fontSize: "28px", color: getColor(index) }}
                ></i>
              </div>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: "13px",
                  color: "#222",
                  textAlign: "center",
                  userSelect: "none",
                }}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  function getColor(index) {
    const colors = ["#E74C3C", "#8E44AD", "#F1C40F", "#1ABC9C", "#3498DB"];
    return colors[index % colors.length];
  }
  