export function projectCaseSections(study = {}) {
  return [
    { id: "context", title: "Context and problem", body: study.context },
    { id: "approach", title: "Approach and process", items: study.approach },
    { id: "deliverables", title: "Design and delivery", items: study.deliverables },
    { id: "findings", title: "Findings and observations", items: study.findings },
    { id: "implications", title: "Design implications", items: study.implications },
    { id: "limits", title: "Evidence and limits", body: study.limits },
    { id: "team", title: "Team and contribution", body: study.team },
  ].filter((section) => section.items ? section.items.length > 0 : Boolean(section.body));
}
