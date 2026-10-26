import Link from "next/link";
import "./ContectBanner.css";

export function ContactBanner() {
    return (
        <section className="contact-banner-section">
            <div className="contact-banner-container">
                <h2 className="contact-banner-title">
                    Let&apos;s connect and craft excellence
                </h2>
                <Link href="/contact" className="contact-banner-btn">
                    Contact me
                </Link>
            </div>
        </section>
    );
}