import fitz
import sys, os

sys.stdout.reconfigure(encoding='utf-8')
doc = fitz.open(r'_catalogue việt hàn  (3).pdf')
os.makedirs('pdf_images', exist_ok=True)

for i in range(doc.page_count):
    page = doc[i]
    images = page.get_images(full=True)
    print(f'Page {i+1}: {len(images)} images')
    for j, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        ext = base_image['ext']
        w = base_image['width']
        h = base_image['height']
        img_bytes = base_image["image"]
        print(f'  Image {j}: {w}x{h} .{ext} size={len(img_bytes)} bytes')
        with open(f'pdf_images/page{i+1}_img{j}.{ext}', 'wb') as f:
            f.write(img_bytes)

print('Done extracting images')
