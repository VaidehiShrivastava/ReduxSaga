import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <section>
        <div className="flex-spacebtwn">
        <h1>Header</h1>
        <Link to={"/cart"}>
        <h3>Cart</h3>
        </Link>
        </div>
      </section>
    </header>
  );
}
