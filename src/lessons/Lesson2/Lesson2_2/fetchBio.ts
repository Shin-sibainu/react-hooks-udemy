// fetchBio 関数は、指定された person のユーザーデータを非同期で取得します。
export async function fetchBio(person: string) {
  // 仮のネットワークレイテンシをシミュレートするために、少し遅延させます。
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const bio = `This is a ${person}'s bio`;
  // 指定された person に対応するユーザーデータを返します。
  // データが見つからない場合は null を返します。
  return bio;
}
