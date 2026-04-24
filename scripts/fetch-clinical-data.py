# /// script
# dependencies = [
#   "hishel",
#   "rich",
#   "beautifulsoup4",
#   "lxml",
#   "cyclopts",
#   "pytest-playwright",
# ]
# ///

import hishel
import rich
from bs4 import BeautifulSoup
from lxml import etree

from cyclopts import App

from playwright.async_api import async_playwright, Playwright

app = App()

http_client = hishel.CacheClient()
"""
The HTTP client to use for fetching the data. Requests will be cached.
"""

PAGINATION_ITEMS_SELECTION = ".al-pageNumber"

@app.default
async def main(
    collection_url: str = "https://jamanetwork.com/collections/6257/the-rational-clinical-examination"
):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(collection_url)

        print(await page.content())

        pages = await page.query_selector_all(PAGINATION_ITEMS_SELECTION)

        for page in pages:
            print(await page.text_content())





def get_all_pages(collection_url: str) -> list[str]:
    """
    The collection page is paginated. This function will return the URL for each page.
    """

    links = []

    response = http_client.get(collection_url, extensions={"force_cache": True})
    soup = BeautifulSoup(response.text, "html.parser")

    pagination_items = soup.select(PAGINATION_ITEMS_SELECTION)

    print(pagination_items)

    for item in pagination_items:
        links.append(item.get("href"))

    return links

if __name__ == "__main__":
    app()
