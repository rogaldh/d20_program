import * as anchor from "@project-serum/anchor";
import test from "ava";

test("d20_program::should initialize", async (t) => {
  anchor.setProvider(anchor.AnchorProvider.env());
  // Configure the client to use the local cluster.

  const program = anchor.workspace.D20Program;
  const tx = await program.methods.initialize().rpc();
  console.log("Your transaction signature", tx);

  t.pass();
});
