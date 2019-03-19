export function displayAds() {
    document.querySelectorAll(".ad-view-div-gpt").forEach(node => {
        window.googletag.cmd.push(() => {
          window.googletag.display(node.id);
        });
    });
}