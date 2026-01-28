document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const footer = document.querySelector(".footer");
    if (!footer) {
        return;
    }

    const existing = footer.querySelector(".footer-note");
    if (existing) {
        existing.textContent = `© ${year} College Admission Portal. All rights reserved.`;
        return;
    }

    const note = document.createElement("div");
    note.className = "footer-note";
    note.style.marginTop = "18px";
    note.style.color = "var(--muted)";
    note.textContent = `© ${year} College Admission Portal. All rights reserved.`;
    footer.querySelector(".container")?.appendChild(note);
});
