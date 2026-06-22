from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_URL = "https://outagereadyhome.vercel.app"

OUTPUT_DIR = Path.cwd() / "Outage Ready Home Sale Package" / "01 Screenshots"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

screenshots = [
    {
        "name": "01-homepage-full-page.png",
        "url": BASE_URL,
        "full_page": True,
        "scroll_to_text": None,
    },
    {
        "name": "02-calculators-page.png",
        "url": f"{BASE_URL}/calculators",
        "full_page": False,
        "scroll_to_text": None,
    },
    {
        "name": "03-guides-page.png",
        "url": f"{BASE_URL}/guides",
        "full_page": False,
        "scroll_to_text": None,
    },
    {
        "name": "04-power-station-size-calculator.png",
        "url": f"{BASE_URL}/calculators/power-station-size",
        "full_page": False,
        "scroll_to_text": "Inputs",
    },
    {
        "name": "05-apartment-outage-kit-builder.png",
        "url": f"{BASE_URL}/calculators/apartment-outage-kit-builder",
        "full_page": False,
        "scroll_to_text": "Inputs",
    },
    {
        "name": "06-best-portable-power-stations-guide.png",
        "url": f"{BASE_URL}/guides/best-portable-power-stations",
        "full_page": False,
        "scroll_to_text": "Quick Answer",
    },
    {
        "name": "07-best-power-banks-guide.png",
        "url": f"{BASE_URL}/guides/best-power-banks-for-power-outages",
        "full_page": False,
        "scroll_to_text": "Quick Answer",
    },
    {
        "name": "08-affiliate-disclosure.png",
        "url": f"{BASE_URL}/affiliate-disclosure",
        "full_page": False,
        "scroll_to_text": None,
    },
    {
    "name": "09-calculators-full-page.png",
    "url": f"{BASE_URL}/calculators",
    "full_page": True,
    "scroll_to_text": None,
},
{
    "name": "10-guides-full-page.png",
    "url": f"{BASE_URL}/guides",
    "full_page": True,
    "scroll_to_text": None,
},
]

def clean_page(page):
    page.add_style_tag(
        content="""
        * {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
        """
    )

def take_screenshot(page, item):
    print(f"Opening: {item['url']}")

    page.goto(item["url"], wait_until="networkidle", timeout=60000)
    clean_page(page)
    page.wait_for_timeout(1000)

    if item["scroll_to_text"]:
        try:
            page.get_by_text(item["scroll_to_text"], exact=False).first.scroll_into_view_if_needed()
            page.wait_for_timeout(700)
            page.evaluate("window.scrollBy(0, -120)")
            page.wait_for_timeout(500)
        except Exception:
            print(f"Could not scroll to text: {item['scroll_to_text']}")

    output_path = OUTPUT_DIR / item["name"]

    page.screenshot(
        path=str(output_path),
        full_page=item["full_page"],
        type="png",
    )

    print(f"Saved: {output_path}")

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        page = browser.new_page(
            viewport={
                "width": 1440,
                "height": 1000,
            },
            device_scale_factor=1,
        )

        for item in screenshots:
            take_screenshot(page, item)

        browser.close()

    print("\nDone. Screenshots saved in:")
    print(OUTPUT_DIR)

if __name__ == "__main__":
    main()